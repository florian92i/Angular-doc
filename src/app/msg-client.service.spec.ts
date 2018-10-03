import { TestBed } from '@angular/core/testing';

import { MsgClientService } from './services/msg-client.service';

describe('MsgClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsgClientService = TestBed.get(MsgClientService);
    expect(service).toBeTruthy();
  });
});
