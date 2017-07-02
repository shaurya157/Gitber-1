import {connect} from 'react-redux';
import App from './app'

const mapStateToProps = (state) => ({
  user: state.searchResult.user,
  organization: state.searchResult.organization,
  repos: state.searchResult.repos
});

const mapDispatchToProps = (dispatch) => ({
  requestUser = (user) => requestUser(user),
  requestOrganization = (org) => requestOrganization(org),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
