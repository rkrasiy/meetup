/* eslint-disable testing-library/no-debugging-utils */
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AllMeetupsPage from "./AllMeetupsPage"

test("<AllMeetupsPage/> renders without crashing", () => {
  const wrapper = shallow(<AllMeetupsPage />);
  expect(wrapper.exists()).toBe(true);
});

describe('Check component AllMeetupsPage', ()=>{
  let wrapper = shallow(<AllMeetupsPage />);

  beforeEach(()=> {
    wrapper = shallow(<AllMeetupsPage />);
  })

  test('must be shown <AllMeetupsPage /> correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

  test('must shown Loading...', ()=> {
     const wrapper = shallow(<AllMeetupsPage />);
      const counterText = wrapper.find('p').text().trim();
      expect(counterText).toBe('Loading...');
  })

  test('must shown title: All Meetups', ()=> {
     const wrapper = shallow(<AllMeetupsPage data={[{'id':'a1','title':'title 1'}]} favorites={['a1']} />);
      const counterText = wrapper.find('h1').text().trim();
      expect(counterText).toBe('All Meetups');
  })
})