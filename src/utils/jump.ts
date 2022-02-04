import jumpJs from "jump.js";

const jump = (target: string | Element | number, opts?: jumpJs.Options | undefined) => {
  if (window.jumping) return;

  const callback = opts?.callback;
  window.jumping = true;

  jumpJs(target, {
    ...{
      duration: 500,
      offset: -72,
    },
    ...opts,
    callback: () => {
      window.jumping = false;
      if (callback) callback();
    },
  });
};

export default jump;
