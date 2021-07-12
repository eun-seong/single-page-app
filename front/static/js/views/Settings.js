import AbstractView from './AbstractView.js';

class Settings extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  getHTML = async () => {
    return `
            <h1>Welcom back, DOM</h1>
            <p>Hi there, this is you Dashboard.</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
  };
}

export default Settings;
