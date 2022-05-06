/* eslint-disable testing-library/no-debugging-utils */
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import MainNavigation from "./MainNavigation"

test("<MainNavigation/> renders without crashing", () => {
  const wrapper = shallow(<MainNavigation />);
  expect(wrapper.exists()).toBe(true);
});

describe('Check component MainNavigation', ()=>{
  let wrapper = shallow(<MainNavigation />);

  beforeEach(()=> {
    wrapper = shallow(<MainNavigation />);
  })

  test('must be shown <MainNavigation /> correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  test('must shown 0', ()=> {
     const wrapper = shallow(<MainNavigation />);
      const counterText = wrapper.find('span').text().trim();
      expect(counterText).toBe('0');
  })

  test('must shown 3', ()=> {
     const wrapper = shallow(<MainNavigation  favoriteCount={3} />);
      const counterText = wrapper.find('span').text().trim();
      expect(counterText).toBe('3');
  })
})