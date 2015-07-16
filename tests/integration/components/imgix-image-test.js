import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

/* global URI */

moduleForComponent('imgix-image', 'Integration | Component | imgix image', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{imgix-image path="/users/1.png"}}`);

  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$('img').length, 1);
});

test('it renders the correct path', function(assert) {
  this.render(hbs`{{imgix-image path="/users/1.png"}}`);

  assert.ok(this.$('img').attr('src').indexOf("https://assets.imgix.net/users/1.png") > -1);
  assert.ok(this.$('img').attr('src').indexOf("w=1280") > -1);
});

test('it builds the default URL', function(assert) {
  this.render(hbs`{{imgix-image path="/users/1.png"}}`);
  let url = URI(this.$('img').attr('src'));

  assert.equal(url.search(true).w, "1280");
  assert.equal(url.pathname(), "/users/1.png");
  assert.equal(url.search(true).fit, "crop");
  assert.equal(url.search(true).crop, "faces");
});

test('it maintains any query parameters passed in', function(assert) {
  assert.expect(2);
  this.render(hbs`{{imgix-image path="/users/1.png?sat=100"}}`);

  let url = URI(this.$('img').attr('src'));
  assert.equal(url.search(true).sat, "100");
  assert.equal(url.search(true).w, "1280");
});

test('it renders with an aspect ratio', function(assert) {
  this.render(hbs`{{imgix-image path="/users/1.png" aspectRatio=1.3333}}`);

  assert.equal(this.$().text().trim(), '');
  let url = URI(this.$('img').attr('src'));

  assert.equal(url.search(true).w, "1280");
  assert.equal(url.search(true).h, "960");
});