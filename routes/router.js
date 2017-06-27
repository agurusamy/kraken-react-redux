import React from 'react';
import { Router, Route, IndexRoute, hashHistory, createRoutes } from 'react-router';
import Home from '../public/components/Home';
import ArtistMain from '../public/components/artists/ArtistMain';
import ArtistDetail from '../public/components/artists/ArtistDetail';
import ArtistCreate from '../public/components/artists/ArtistCreate';
import ArtistEdit from '../public/components/artists/ArtistEdit';

const Routes = createRoutes(
    <Router history={hashHistory} >
        <Route path="/" component={Home}>
          <IndexRoute component={ArtistMain} />
          <Route path="artists/new" component={ArtistCreate} />
          <Route path="artists/:id" component={ArtistDetail} />
          <Route path="artists/:id/edit" component={ArtistEdit} />
        </Route>
    </Router>
);

export default Routes;
