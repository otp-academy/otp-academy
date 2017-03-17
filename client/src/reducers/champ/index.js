import * as Consts from '../../constants/champ';

const initialState = {
  isFetching: false,
  data: {},
  error: null
};



const champListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consts.CHAMPLIST_REQUEST:
      return {
        ...state,
        isFetchingChampList: true,
        error: null
      };
    case Consts.CHAMPLIST_SUCCESS:
      var latestVersion = action.result.version;
      var champList = action.result;
      var sortedNames = [];
      for(var champKeyName in champList) {
        if (champKeyName === 'version') continue;
        var champ = champList[champKeyName];
        champ.imageURL = "http://ddragon.leagueoflegends.com/cdn/" + latestVersion + "/img/champion/"+champ.image.full;
        // champ.name is the actual name of the champion
        // champKeyName is the key 'name' for the champion
        // This is because Wukong's key name is MonkeyKing
        sortedNames.push([champ.name, champKeyName]);
      }
      sortedNames.sort((a,b) => {
        return a[0] < b[0] ? -1 : 1;
      });
      var sortedObj = {};
      sortedNames.forEach(champ => {
        sortedObj[champ[1]] = champList[champ[1]];
      });

      return {
        ...state,
        data: sortedObj,
        isFetchingChampList: false,
        error: null
      };
    case Consts.CHAMPLIST_FAILED:
      return {
        ...state,
        isFetchingChampList: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default champListReducer;



