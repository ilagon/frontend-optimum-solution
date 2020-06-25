
import { shallow, mount } from 'enzyme';
import React from 'react';
import PropTypes from 'prop-types';
import AboutUs from '../components/Login/AboutUs';
import ChangedPass from '../components/Login/ChangedPass';
import ContactUs from '../components/Login/ContactUs';
import Dashboard from '../components/Login/dashboard';
import EmailSent from '../components/Login/EmailSent';
import FAQ from '../components/Login/FAQ';
import Footer from '../components/Login/Footer';
import ForgetPass from '../components/Login/ForgetPass';
import Login from '../components/Login/Login';
import MainPage from '../components/Login/MainPage';
import MainPageLayout from '../components/Login/MainPageLayout';
import PersonalBanking from '../components/Login/PersonalBanking';
import ResetPass from '../components/Login/ResetPass';
import SignUp from '../components/Login/SignUp';
import SignUpResult from '../components/Login/SignUpResult';
import TopNav from '../components/Login/TopNav';

describe('Render all components', () => {

    const wrapperA = shallow(<AboutUs />)
    test('About Us Render', () => {
        expect(wrapperA.exists()).toBe(true);
    });

    const wrapperB = shallow(<ChangedPass />)
    test('Changed Pass Render', () => {
        expect(wrapperB.exists()).toBe(true);
    });

    let wrapperC = shallow(<ContactUs />)
    test('Contact Us Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<Dashboard />)
    test('Dashboard Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<EmailSent />)
    test('EmailSent Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<FAQ />)
    test('FAQ Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<Footer />)
    test('Footer Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<ForgetPass />)
    test('ForgetPass Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<Login />)
    test('Login Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<MainPage />)
    test('MainPage Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<MainPageLayout />)
    test('MainPageLayout Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<PersonalBanking />)
    test('PersonalBanking Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    // wrapperC = shallow(<ResetPass />)
    // test('ResetPass Render', () => {
    //     expect(wrapperC.exists()).toBe(true);
    // });
    wrapperC = shallow(<SignUp />)
    test('SignUp Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<SignUpResult />)
    test('SignUpResult Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });
    wrapperC = shallow(<TopNav />)
    test('TopNav Render', () => {
        expect(wrapperC.exists()).toBe(true);
    });

});


describe('About Us', () => {
    it('App shows "About Us"', () => {
        const about = shallow(
            <AboutUs />
        ).dive()
        expect(about.find('#AboutUs1').text()).toEqual('About UsEveryone wants the best, Optimum believes you deserves nothing less.Optimum has over 120 years of experience in Banking and every generation In South East Asia knows about optimum. We make the best effort for you, and we are in the business of creating. With more than 10,000 Employees and in all markets in South East Asia, we provide excellent services for everyone who trusts Optimum.As the leading banking services in South East Asia, we ensure your investments are in responsible hands. Every foresight and insights were made and executed especially for you.We go further than what is needed, with experiences and specialties in commodities, investments, and services because we value what you truly value.')
    })

    it('App shows "About Us"', () => {
        const about = shallow(
            <AboutUs />
        ).dive()
        expect(about.find('#AboutUs2').text()).toEqual('About Us')
    })

    it('App shows "About Us"', () => {
        const about = shallow(
            <AboutUs />
        ).dive()
        expect(about.find('#AboutUs3').text()).toEqual('Everyone wants the best, Optimum believes you deserves nothing less.')
    })

    it('App shows "About Us"', () => {
        const about = shallow(
            <AboutUs />
        ).dive()
        expect(about.find('#AboutUs4').text()).toEqual('Optimum has over 120 years of experience in Banking and every generation In South East Asia knows about optimum. We make the best effort for you, and we are in the business of creating. With more than 10,000 Employees and in all markets in South East Asia, we provide excellent services for everyone who trusts Optimum.')
    })
    it('App shows "About Us"', () => {
        const about = shallow(
            <AboutUs />
        ).dive()
        expect(about.find('#AboutUs5').text()).toEqual('As the leading banking services in South East Asia, we ensure your investments are in responsible hands. Every foresight and insights were made and executed especially for you.We go further than what is needed, with experiences and specialties in commodities, investments, and services because we value what you truly value.')
    })

}); //End of about Us


describe('Changed Pass', () => {
    const change = shallow(<ChangedPass />)
    test('ChangedPass value', () => {
        expect(change.find('#change1').text()).toBe('Password successfully reset!');
    })
    test('ChangedPass value', () => {
        expect(change.find('#logout').text()).toBe('Password successfully reset!You will receive an email regarding this update.Click here if are not redirected after a few seconds');
    })
    test('ChangedPass value', () => {
        expect(change.find('#change2').text()).toBe('You will receive an email regarding this update.');
    })
    test('ChangedPass value', () => {
        expect(change.find('#change3').text()).toBe('Click here if are not redirected after a few seconds');
    })
    //how to test set timeout?

});

describe('Contact us', () => {

    it('Contact Us value', () => {
        const contact = shallow(<ContactUs />).dive()
        expect(contact.find('#contact1').text()).toEqual('Contact Us');
    })

    it('Contact Us value', () => {
        const contact = shallow(<ContactUs />).dive()
        expect(contact.find('#contact2').text()).toEqual('How may we assist you?');
    })

    it('Contact Us value', () => {
        const contact = shallow(<ContactUs />).dive()
        expect(contact.find('#contact3').text()).toEqual('');
    })



});

// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
// describe('Changed Pass', () => {

// });
