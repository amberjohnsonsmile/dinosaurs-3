import Component from '@ember/component';

export default Component.extend({
  click(event) {
    event.preventDefault();
    updatePreview();
    this.$('section').toggleClass('hidden');
  }
});

function updatePreview() {
  const preview = document.querySelector('#application-preview');
  const text = document.querySelector('#application-text').value;
  preview.textContent = text;
}
