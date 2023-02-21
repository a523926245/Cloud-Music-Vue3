// 方案一： 使用createApp
// import LoginDialog from './LoginDialog.vue';
// import { createApp } from 'vue';

// const renderContainer = document.createElement('div');
// const LoginModal = createApp(LoginDialog).mount(renderContainer);
// const LoginModalPlugin = {
//   open() {
//     LoginModal.open();
//     document.body.appendChild(LoginModal.$el);
//   },
//   hide() {
//     LoginModal.close();
//   }
// };
// export default {
//   install(app) {
//     app.config.globalProperties.$LoginModal = LoginModalPlugin;
//   }
// };

// 方案二： 使用createApp, render

import LoginDialog from './LoginDialog.vue';
import { createVNode, render } from 'vue';

const cantainer = document.createElement('div');
cantainer.className = 'login-modal';

const removeRepeatCantainer = () => {
  const hasContainer = document.querySelector('.login-modal');
  if (hasContainer) {
    document.body.removeChild(cantainer);
  }
};

export const LoginModalPlugin = {
  open: () => {
    const vNode = createVNode(LoginDialog);
    render(vNode, cantainer);
    document.body.appendChild(cantainer);
    // 组件内部方法的使用方式
    vNode.component.exposed.open();
  },

  close: () => {
    removeRepeatCantainer();
    render(null, cantainer);
  }
};

export default {
  install(app) {
    app.config.globalProperties.$LoginModal = LoginModalPlugin;
  }
};
