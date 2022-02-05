import jumpJs from "jump.js";

const jump = (target: string | Element | number, opts?: jumpJs.Options | undefined) => {
  if (window.jumping) return;
  window.jumping = true;

  jumpJs(target, {
    ...{
      duration: 500,
      offset: -72,
    },
    ...(opts || {}),
    callback: () => {
      window.jumping = false;
      if (opts?.callback) opts?.callback();
    },
  });
};

export default jump;
