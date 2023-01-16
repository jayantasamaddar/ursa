/**
 * Exploring how JavaScript Web Animation API works
 * --------------------------------------------------
 * 1. [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
 *
 * 2. [White Rabbit Animation using Web Animations API](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010)
 */
const Documentation = console.log('Documentation');

const target = document.getElementById('target');
const moveDownKeyframes = new KeyframeEffect(
  target,
  [{ transform: 'translateY(0%)' }, { transform: 'translateY(100%)' }],
  {
    duration: 3000,
    fill: 'forwards'
  }
);

/**
 * The [Animation](https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation) Constructor takes two arguments,
 *
 * 1. An object created with the `KeyframeEffect()` [Constructor](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect).
 *
 * 2. Timeline
 */
const moveDownAnimation = new Animation(moveDownKeyframes, document.timeline);

/************************************************************************************/
/** Animation Logic */
/************************************************************************************/
// On tap or click,
target.addEventListener('mousedown', downHeGoes, false);
target.addEventListener('touchstart', downHeGoes, false);

// Trigger a single-fire animation
function downHeGoes(event) {
  // Remove those event listeners
  target.removeEventListener('mousedown', downHeGoes, false);
  target.removeEventListener('touchstart', downHeGoes, false);

  // Play rabbit animation
  moveDownAnimation.play();
}
