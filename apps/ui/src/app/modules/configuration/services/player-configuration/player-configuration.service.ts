import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerConfigurationService {
  private mainSinkId = 'default';
  private testSinkId = 'default';

  /**
   * Set the audio output which will be publicly audible
   */
  public setMainSinkId(sinkId: string): void {
    this.mainSinkId = sinkId;
  }

  /**
   * Return the audio output for the public
   * @default default
   */
  public getMainSinkId(): string {
    return this.mainSinkId;
  }

  /**
   * Set the audio output which will should only be heard by the director
   */
  public setTestSinkId(sinkId: string): void {
    this.testSinkId = sinkId;
  }

  /**
   * Return the audio output for the director
   * @default default
   */
  public getTestSinkId(): string {
    return this.testSinkId;
  }
}
