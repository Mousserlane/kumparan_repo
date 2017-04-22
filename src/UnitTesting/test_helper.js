import ReactTestUtils from 'react-dom/test-utils';


function renderShallow(component){
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export {renderShallow};
