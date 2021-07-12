class AbstractView {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHTML() {
    return '';
  }
}

export default AbstractView;
