import { getRandomPositiveInteger } from './utils.js';
import { AVATAR, MESSAGES, NAMES, MAX_PHOTO, DESCRIPTIONS, LIKES, CountComment } from './const.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${(getRandomPositiveInteger(AVATAR.MIN, AVATAR.MAX))}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});

const createComments = () => Array.from({length: getRandomPositiveInteger(CountComment.MIN, CountComment.MAX)}, (_, index) => createComment(index + 1));

const createUserData = (id) => ({
  id,
  url: `photos/${ getRandomPositiveInteger(1, MAX_PHOTO) }.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(LIKES.MIN, LIKES.MAX),
  comments: createComments(id)
});

const createPhotos = () => Array.from({length: MAX_PHOTO}).map((element, index) => (element = createUserData(index + 1)));

export { createPhotos };
