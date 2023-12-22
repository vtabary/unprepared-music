import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  fromEvent,
  map,
  merge,
  takeUntil,
} from 'rxjs';

export interface ExperimentalHTMLAudioElement extends HTMLAudioElement {
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

@Component({
  selector: 'unprepared-music-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioComponent implements AfterViewInit, OnDestroy {
  @Input()
  public urls: string[] = [];

  @Input()
  public preload = true;

  @Input()
  public sinkId = 'default';

  private status$ = new BehaviorSubject<AudioStatus>(AudioStatus.WAITING);

  @Output()
  public status = this.status$.asObservable();

  @ViewChild('audioObject')
  public audioObject?: ElementRef<ExperimentalHTMLAudioElement>;

  private onDestroy$ = new Subject();

  /**
   * @internal
   */
  public ngAfterViewInit(): void {
    if (!this.audioObject) {
      return;
    }

    merge(
      fromEvent(this.audioObject.nativeElement, 'canplay').pipe(
        map(() => AudioStatus.READY)
      ),
      fromEvent(this.audioObject.nativeElement, 'play').pipe(
        map(() => AudioStatus.PLAYING)
      ),
      fromEvent(this.audioObject.nativeElement, 'pause').pipe(
        map(() => AudioStatus.PAUSED)
      ),
      fromEvent(this.audioObject.nativeElement, 'waiting').pipe(
        map(() => AudioStatus.WAITING)
      ),
      fromEvent(this.audioObject.nativeElement, 'ended').pipe(
        map(() => AudioStatus.ENDED)
      ),
      fromEvent(this.audioObject.nativeElement, 'stalled').pipe(
        map(() => AudioStatus.ERROR)
      ),
      fromEvent(this.audioObject.nativeElement, 'error').pipe(
        map(() => AudioStatus.ERROR)
      )
    )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((status) => {
        this.status$.next(status);
      });
  }

  /**
   * @internal
   */
  public ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
  }

  /**
   * @internal
   */
  public play(): void {
    if (!this.audioObject) {
      return;
    }

    if (this.audioObject.nativeElement.setSinkId) {
      this.audioObject.nativeElement.setSinkId(this.sinkId);
    }

    this.audioObject.nativeElement.play();
  }

  /**
   * @internal
   */
  public pause(): void {
    if (!this.audioObject) {
      return;
    }

    this.audioObject.nativeElement.pause();
  }
}
