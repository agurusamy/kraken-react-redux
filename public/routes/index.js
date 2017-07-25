import React from 'react';
import { Router, Route, IndexRoute, hashHistory, createRoutes } from 'react-router';
import App from '../views/App';
import ArtistMain from '../components/artists/ArtistMain';
import ArtistDetail from '../components/artists/ArtistDetail';
import ArtistCreate from '../components/artists/ArtistCreate';
import ArtistEdit from '../components/artists/ArtistEdit';

const Routes = createRoutes(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={ArtistMain} />
          <Route path="artists/new" component={ArtistCreate} />
          <Route path="artists/:id" component={ArtistDetail} />
          <Route path="artists/:id/edit" component={ArtistEdit} />
        </Route>
    </Router>
);

export default Routes;
