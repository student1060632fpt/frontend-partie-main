import React,{useState} from 'react';
import config from 'config';

import {  Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Dashboard from './component/pages/dashboard/index'
import Header from './commoncomponent/header';
import BasicTable from './component/pages/table/basictable/index'
 import DataTable from './component/pages/table/datatable/index'
import Categories from './component/pages/categories/index'
 import Projects from './component/pages/projects/index'
import Profile from './component/pages/profile/index'
import Providers from './component/pages/providers/index'
import Subscription from './component/pages/subscription/index'
import SubscripeFreelancer from './component/pages/subscription/subscripe-freelancer'
import ViewPriceEmploye from './component/pages/subscription/view-price-employe'
import ViewPriceFreelance from './component/pages/subscription/view-price-freelance'
import EmployeList from './component/pages/subscription/employe-list'
import FreelanceList from './component/pages/subscription/freelance-list';
import Users from './component/pages/freelancer/users';
import UsersActive from './component/pages/freelancer/users-active'
import UserinActive from './component/pages/freelancer/user-inactive'
import UserSuspended from './component/pages/freelancer/user-suspended'
import UserAdministrator from './component/pages/freelancer/user-administrator'
import Deposit from './component/pages/deposit/index'
import DepositHold from './component/pages/deposit/deposithold'
import DepositCompleted from './component/pages/deposit/deposit-completed'
import DepositCancelled from './component/pages/deposit/deposit-cancelled'
import DepositPending from './component/pages/deposit/deposit-pending'
import UserProfile from './component/pages/freelancerprofile/userprofile'
import Login from './component/pages/login/login'
import WithDrawn from './component/pages/withdrawn/index'
import WithDrawnPending from './component/pages/withdrawn/withdrawn-pending'
import WithDrawnCompleted from './component/pages/withdrawn/withdrawn-completed'
import WithDrawnCancelled from './component/pages/withdrawn/withdrawn-cancelled'
import Transaction from './component/pages/transaction/index'
import TransactionWithdraw from './component/pages/transaction/transaction-withdraw'
import TransactionDeposit from './component/pages/transaction//transaction-deposit'
import TransactionPending from './component/pages/transaction/transaction-pending'
import TransactionOnHold from './component/pages/transaction/transaction-onhold'
import TransactionCompleted from './component/pages/transaction/transaction-completed'
import Roles from './component/pages/role/index'
import RolesPermission from './component/pages/role/roles-permission'
import Skills from './component/pages/skills/index'
import Activities from './component/pages/freelancerprofile/activities'
import ProfileTransaction from './component/pages/freelancerprofile/profile-transactions'
import BasicInput from './component/pages/forms/basic-input/index'
import InputGroup from './component/pages/forms/form-input-group/index'
import FormMask from './component/pages/forms/form-mask/index'
import FormValidation from './component/pages/forms/form-validation/index'
import FormHorizontal from './component/pages/forms/horizontal-form/index'
import FormVertical from './component/pages/forms/vertical-form/index'
import VerifyIdentity from './component/pages/verify-identity/index'
import ForgotPassword from './component/pages/forgotpassword/index'
import Register from './component/pages/register/index'
import Components from './component/pages/components/Index'
import Settings from './component/pages/settings/index'
import LocalizationDetails from './component/pages/settings/LocalizationDetails'
import PaymentSettings from './component/pages/settings/PaymentSettings'
import EmailSettings from './component/pages/settings/EmailSettings'
import SocialSettings from './component/pages/settings/SocialSettings'
import SocialLinks from './component/pages/settings/SocialLinks'
import SeoSettings from './component/pages/settings/SeoSettings'
import OthersSettings from './component/pages/settings/OthersSettings'
import Reports from './component/pages/reports/index'
import ProjectBidding from './component/pages/reports/project-bidding'
import ProjectInvoice from './component/pages/reports/project-invoice'
import ProjectEarnings from './component/pages/reports/project-earnings'

const AppUniversal = function (props) {
  
	const pathname= props.location.pathname;

	const [menu, setMenu] = useState(false);
	const toggleMobileMenu = () => {
		  setMenu(!menu)
		}

	return (
		
			<Router >
				<Switch>
				<Route path="/admin/login" exact component={Login} />
				<Route path="/admin/forgot-password" exact component={ForgotPassword} />
				<Route path="/admin/register" exact component={Register} />
				</Switch>
				{/* <div className='main-wrapper login-body'> */}
				{/* <div className={`main-wrapper ${pathname === '/admin/login'? 'login-body':"" || pathname === '/admin/forgot-password' ? 'login-body': "" || pathname === '/admin/register' ? 'login-body':''} `}> */}
					
				
			    <Route render={(props)=> <Header {...props}onMenuClick={(value) => toggleMobileMenu()}/>} />
				<Switch>
				
				<Route path="/admin/index" exact component={Dashboard} />
				<Route path="/admin/tables-basic" exact component={BasicTable} />
				<Route path="/admin/data-tables" exact component={DataTable} />
				<Route path="/admin/categories" exact component={Categories} />
				<Route path="/admin/projects" exact component={Projects} />
				<Route path="/admin/profile" exact component={Profile} />
				<Route path="/admin/providers" exact component={Providers} />
				<Route path="/admin/subscription" exact component={Subscription} />
				<Route path="/admin/subscripe-freelancer" exact component={SubscripeFreelancer} />
				<Route path="/admin/view-price-employe" exact component={ViewPriceEmploye} />
				<Route path="/admin/view-price-freelance" exact component={ViewPriceFreelance} />
				<Route path="/admin/employe-list" exact component={EmployeList} />
				<Route path="/admin/freelance-list" exact component={FreelanceList} />
				<Route path="/admin/users" exact component={Users} />
				<Route path="/admin/user-active" exact component={UsersActive} />
				<Route path="/admin/user-inactive" exact component={UserinActive} />
				<Route path="/admin/user-suspended" exact component={UserSuspended} />
				<Route path="/admin/user-administrator" exact component={UserAdministrator} />
				<Route path="/admin/deposit" exact component={Deposit} />
				<Route path="/admin/deposit-hold" exact component={DepositHold} />
				<Route path="/admin/deposit-completed" exact component={DepositCompleted} />
				<Route path="/admin/deposit-cancelled" exact component={DepositCancelled} />
				<Route path="/admin/deposit-pending" exact component={DepositPending} />
				<Route path="/admin/user-profile" exact component={UserProfile} />
			
				<Route path="/admin/withdrawn" exact component={WithDrawn} />
				<Route path="/admin/withdrawn-pending" exact component={WithDrawnPending} />
				<Route path="/admin/withdrawn-completed" exact component={WithDrawnCompleted} />
				<Route path="/admin/withdrawn-cancelled" exact component={WithDrawnCancelled} />
				<Route path="/admin/transaction" exact component={Transaction} />
				<Route path="/admin/transaction-withdraw" exact component={TransactionWithdraw} />
				<Route path="/admin/transaction-deposit" exact component={TransactionDeposit} />
				<Route path="/admin/transaction-pending" exact component={TransactionPending} />
				<Route path="/admin/transaction-onhold" exact component={TransactionOnHold} />
				<Route path="/admin/transaction-completed" exact component={TransactionCompleted} />
				<Route path="/admin/roles" exact component={Roles} />
				<Route path="/admin/roles-permission" exact component={RolesPermission} />
				<Route path="/admin/skills" exact component={Skills} />
				<Route path="/admin/activities" exact component={Activities} />
				<Route path="/admin/profile-transactions" exact component={ProfileTransaction} />
				<Route path="/admin/form-basic-inputs" exact component={BasicInput} />
				<Route path="/admin/form-input-groups" exact component={InputGroup} />
				<Route path="/admin/form-horizontal" exact component={FormHorizontal} />
				<Route path="/admin/form-vertical" exact component={FormVertical} />
				<Route path="/admin/form-mask" exact component={FormMask} />
				<Route path="/admin/form-validation" exact component={FormValidation} />
				<Route path="/admin/verify-identity" exact component={VerifyIdentity} />
			
				<Route path="/admin/components" exact component={Components} />
				<Route path="/admin/settings" exact component={Settings} />
				<Route path="/admin/localization-details" exact component={LocalizationDetails} />
				<Route path="/admin/payment-settings" exact component={PaymentSettings} />
				<Route path="/admin/email-settings" exact component={EmailSettings} />
				<Route path="/admin/social-settings" exact component={SocialSettings} />
				<Route path="/admin/social-links" exact component={SocialLinks} />
				<Route path="/admin/seo-settings" exact component={SeoSettings} />
				<Route path="/admin/others-settings" exact component={OthersSettings} />
				<Route path="/admin/reports" exact component={Reports} />
				<Route path="/admin/project-bidding" exact component={ProjectBidding} />
				<Route path="/admin/project-invoice" exact component={ProjectInvoice} />
				<Route path="/admin/project-earnings" exact component={ProjectEarnings} />
				
				</Switch>
		       {/* </div> */}
			
			</Router>
    );
}

export default AppUniversal;

