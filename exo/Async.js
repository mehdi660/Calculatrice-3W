function anim() {
  return new Promise((resolve) => {
    const randomNumber = Math.floor(Math.random() * 9);
    +1;

    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 24)
    );

    const result = randomNumber + randomLetter;
    resolve(result);
  });
}

async function process() {
  let result = "";
  const res1 = await anim();
  result += res1;
  const res2 = await anim();
  result += res2;
  const res3 = await anim();
  result += res3;
  const res4 = await anim();
  result += res4;
  const res5 = await anim();
  result += res5;
  const res6 = await anim();
  result += res6;
  const res7 = await anim();
  result += res7;
  const res8 = await anim();
  result += res8;
  const res9 = await anim();
  result += res9;
  const res10 = await anim();
  result += res10;

  return result;
}

process()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
