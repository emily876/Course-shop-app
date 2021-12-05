import Header from './myComponents/header/Header';
import Home from './myComponents/home/Home';
import Profile from './myComponents/profile/Profile';
import Cart from './myComponents/cart/Cart';
import History from './myComponents/history/History';
import {Product1} from './myComponents/detailCourse/Product1';
import {Product2} from './myComponents/detailCourse/Product2';
import {Product3} from './myComponents/detailCourse/Product3';
import {Product4} from './myComponents/detailCourse/Product4';
import {Product5} from './myComponents/detailCourse/Product5';
import {Product6} from './myComponents/detailCourse/Product6';
import {Product7} from './myComponents/detailCourse/Product7';
import {Course1} from './myComponents/detailCourse/Course1';
import {Course2} from './myComponents/detailCourse/Course2';
import {Course3} from './myComponents/detailCourse/Course3';
import {Course4} from './myComponents/detailCourse/Course4';
import {Course5} from './myComponents/detailCourse/Course5';
import {Course6} from './myComponents/detailCourse/Course6';
import {Course7} from './myComponents/detailCourse/Course7';
import {Course8} from './myComponents/detailCourse/Course8';
import {Course9} from './myComponents/detailCourse/Course9';


import Footer from './myComponents/footer/Footer';
import { TemplateProvider } from './templates/TemplateProvider';

import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import {Box} from '@material-ui/core';

function App() {
    return (
        <TemplateProvider>
          <BrowserRouter>
                <Header />
                <Home/>
                <Box style={{marginTop:54}}>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/history" component={History} />
                <Route exact path="/Product1" component={Product1} />
                <Route exact path="/Product2" component={Product2} />
                <Route exact path="/Product3" component={Product3} />
                <Route exact path="/Product4" component={Product4} />
                <Route exact path="/Product5" component={Product5} />
                <Route exact path="/Product6" component={Product6} />
                <Route exact path="/Product7" component={Product7} />
                <Route exact path="/Course1" component={Course1} />
                <Route exact path="/Course2" component={Course2} />
                <Route exact path="/Course3" component={Course3} />
                <Route exact path="/Course4" component={Course4} />
                <Route exact path="/Course5" component={Course5} />
                <Route exact path="/Course6" component={Course6} />
                <Route exact path="/Course7" component={Course7} />
                <Route exact path="/Course8" component={Course8} />
                <Route exact path="/Course9" component={Course9} />


                {/* <Route exact path="/product/:id" component={DetailView} /> */}
                </Switch>
                </Box>
                </BrowserRouter>
                <Footer />
          
        </TemplateProvider>
  );
}

export default App;
