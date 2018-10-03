import { SpeakerListModule } from './speaker-list.module';

describe('SpeakerListModule', () => {
  let speakerListModule: SpeakerListModule;

  beforeEach(() => {
    speakerListModule = new SpeakerListModule();
  });

  it('should create an instance', () => {
    expect(speakerListModule).toBeTruthy();
  });
});
