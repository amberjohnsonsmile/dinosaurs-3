import Component from '@ember/component';

export default Component.extend({
  submit(event) {
    event.preventDefault();
    this.$('#message').text('Your application was submitted!');
    event.target.reset();
    $('#application-preview').text('');
  },
  keyUp(event) {
    updatePreview();
  }
});

function updatePreview() {
  const preview = document.querySelector('#application-preview');
  const text = document.querySelector('#application-text').value;
  preview.textContent = text;
}
