const addHashtag = (value: string) => {
  return (value = value
    .replace(/[^a-zA-Zа-яёА-ЯЁ0-9_ ]/g, '')
    .replace(/(\S+)/gi, '#' + '$1'));
};

export default addHashtag;
