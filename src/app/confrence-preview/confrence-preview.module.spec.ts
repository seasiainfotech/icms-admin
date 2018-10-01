import { ConfrencePreviewModule } from './confrence-preview.module';

describe('ConfrencePreviewModule', () => {
  let confrencePreviewModule: ConfrencePreviewModule;

  beforeEach(() => {
    confrencePreviewModule = new ConfrencePreviewModule();
  });

  it('should create an instance', () => {
    expect(confrencePreviewModule).toBeTruthy();
  });
});
