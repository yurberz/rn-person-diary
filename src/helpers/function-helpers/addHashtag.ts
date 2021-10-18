const addHashtag = (value: string) => {
  return (value = value.replace(/[^\w ]/g, '').replace(/(\w+)/gi, '#' + '$1'));
};

export default addHashtag;
