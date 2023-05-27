/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import HeaderComponent from '@/components/global/header/HeaderComponent.vue';

describe('HeaderComponent', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the "Home" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/"]').text()).toBe('Home');
  });

  it('contains the "Products" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/products"]').text()).toBe('Products');
  });

  it('contains the "Contact" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/contact"]').text()).toBe('Contact');
  });

  it('contains the "About" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/about"]').text()).toBe('About');
  });

  it('contains the "Blog" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/blog"]').text()).toBe('Blog');
  });

  it('contains the "Something" navigation link', () => {
    const wrapper = shallowMount(HeaderComponent);
    expect(wrapper.find('[to="/something"]').text()).toBe('Something');
  });
});

  