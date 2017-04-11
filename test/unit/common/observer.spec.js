import '../setup';
import {Observer} from 'src/common/observer';

describe('Observer', () => {
  let sut;

  beforeEach(() => {
    sut = new Observer();
  });

  it('raises callback when event gets called', done => {
    sut.subscribe('ready', () => {
      done();
    });

    sut.notify('ready');
  });

  it('passes data to callback', done => {
    sut.subscribe('ready', (evt, data) => {
      expect(evt).toBe('ready');
      expect(data).toBe(15);
      done();
    });

    sut.notify('ready', 15);
  });

  it('can dispose of subscriptions', done => {
    let subscription = sut.subscribe('ready', () => {
      done.fail('this callback should not have been called');
    });

    subscription.dispose();

    sut.notify('ready');
    done();
  });
});
