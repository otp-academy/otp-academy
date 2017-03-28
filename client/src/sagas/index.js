import watchAuth from './auth';
import watchChamp from './champ';
import watchUser from './user';

export default function* mainSaga() {
  yield [
    watchAuth(),
    watchChamp(),
    watchUser()
  ]
}