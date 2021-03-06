import { mount } from '@vue/test-utils';
import Index from '../../views/DeviceIndex';
import { makeAvailableChannelsPageStore } from '../../../test/utils/makeStore';
import router from '../../../test/views/testRouter';

function makeWrapper() {
  const wrapper = mount(Index, {
    store: makeAvailableChannelsPageStore(),
    ...router,
  });
  const els = {
    CoreBase: () => wrapper.findComponent({ name: 'CoreBase' }),
  };
  return { wrapper, els };
}

describe('DeviceIndex component', () => {
  it('CoreBase is immersive when at the SELECT_CONTENT page', async () => {
    const { wrapper, els } = makeWrapper();
    await wrapper.vm.$router.push({ name: 'SELECT_CONTENT' });
    expect(els.CoreBase().props().immersivePage).toEqual(true);
  });

  it('CoreBase is immersive when at the AVAILABLE_CHANNELS page', async () => {
    const { wrapper, els } = makeWrapper();
    await wrapper.vm.$router.push({ name: 'AVAILABLE_CHANNELS' });
    expect(els.CoreBase().props().immersivePage).toEqual(true);
  });
});
