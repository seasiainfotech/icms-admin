import { ConfrenceSessionListModule } from './confrence-session-list.module';

describe('ConfrenceSessionListModule', () => {
  let confrenceSessionListModule: ConfrenceSessionListModule;

  beforeEach(() => {
    confrenceSessionListModule = new ConfrenceSessionListModule();
  });

  it('should create an instance', () => {
    expect(confrenceSessionListModule).toBeTruthy();
  });
});
