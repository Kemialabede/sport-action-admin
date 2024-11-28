import { Formik } from 'formik';
import Input from '../../components/input';
import AuthLayout from '../../components/layout/authLayout';
import Button from '../../components/button';
import './auth.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      headerText="Log In"
      caption="Enter your credentials to access admin account"
    >
      <Formik>
        <>
          <div className="inputContainer">
            <Input title="Email Address" placeholder="Enter email address" />
            <Input title="Password" type="password" placeholder="Enter paswword" />
          </div>
          <Button
            theme="primary"
            size="lg"
            onClick={() => navigate('/dashboard')}
          >
            Log In
          </Button>
        </>
      </Formik>
    </AuthLayout>
  );
};

export default Login;
