import watchAuth from './auth';
import watchChamp from './champ';

export default function* mainSaga() {
  yield [
    watchAuth(),
    watchChamp()
  ]
}