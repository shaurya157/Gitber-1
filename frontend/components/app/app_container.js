import {connect} from 'react-redux';
import App from './app'
import { requestUser,
        requestOrganization,
        requestUserRepos} from '../../actions/search_actions';

const mapStateToProps = ({searchResult}) => ({
  user: searchResult.user,
  organization: searchResult.organization,
  repos: searchResult.repos
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (user) => dispatch(requestUser(user)),
  requestOrganization: (org) => dispatch(requestOrganization(org)),
  requestUserRepos: (user) => dispatch(requestUserRepos(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
