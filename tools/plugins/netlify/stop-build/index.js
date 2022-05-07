module.exports = {
  onPreBuild: () => {
    console.log('Now prebuilding');
  },
  onBuild: () => {
    console.log('Now building');
  },
  onPostBuild: () => {
    console.log('Built!!!');
  },
};
