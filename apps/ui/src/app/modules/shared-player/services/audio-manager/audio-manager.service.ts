import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, map, switchMap, timer } from 'rxjs';

export interface ExperimentalAudioContext extends AudioContext {
  setSinkId?: (id: string) => void;
}

export enum AudioStatus {
  READY = 'READY',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  WAITING = 'WAITING',
  ENDED = 'ENDED',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class AudioManagerService {
  private _state = new BehaviorSubject<AudioStatus>(AudioStatus.WAITING);
  private audioContext: ExperimentalAudioContext = new AudioContext();
  private currentSource?: AudioBufferSourceNode;

  public state = this._state.asObservable();
  public time = timer(100).pipe(
    filter(() => this.audioContext.state === 'running'),
    map(() => this.audioContext.currentTime)
  );

  constructor(private httpClient: HttpClient) {}

  public isPlaying(): boolean {
    return this.audioContext.state === 'running';
  }

  public getDuration(): number {
    return this.currentSource?.buffer?.duration ?? -1;
  }

  public play(url: string): void {
    this.pause();
    this.clear();

    this.httpClient
      .get(url, { responseType: 'arraybuffer' })
      .pipe(
        switchMap((buffer) => from(this.audioContext.decodeAudioData(buffer))),
        map((audioBuffer) => {
          this.currentSource = this.audioContext.createBufferSource();
          this.currentSource.buffer = audioBuffer;
          this.currentSource.connect(this.audioContext.destination);
          this.currentSource.start(0);
          this._state.next(AudioStatus.PLAYING);
        })
      )
      .subscribe();
  }

  public pause(): void {
    if (this.audioContext.state !== 'running') {
      return;
    }

    // this.audioContext.suspend();
    this.currentSource?.stop();
    this._state.next(AudioStatus.PAUSED);
  }

  public clear() {
    if (!this.currentSource) {
      return;
    }
    this.currentSource.stop();
    this.currentSource = undefined;
  }

  public setSinkId(id: string): void {
    if (this.audioContext.setSinkId) {
      this.audioContext.setSinkId(id);
    }
  }
}
