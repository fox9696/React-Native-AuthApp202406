import { Button, View } from 'react-native';
import Input from '../Ui/Input';
import { useState } from 'react';

const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredComfirmPassword, setEnteredfirmPassword] = useState('');

  const {
    email: emailIsvalid,
    name: nameIsvalid,
    password: passwordIsvalid,
    confirmPassword: passwordDontMatch,
  } = credentialsInvalid;

  const updateInputValueHandler = (inputType, enteredValue) => {
    console.log('inputType:', inputType);
    console.log('enteredValue:', enteredValue);
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'name':
        setEnteredName(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredfirmPassword(enteredValue);
        break;
    }
  };

  const submitHandler = () => {
    console.log('버튼 클릭됨! submit');
    // 사용자의 입력 상태값을 객체로 포장해서 AuthContent에게 넘긴다 -> 부모쪽에서 유효성 검증 할 것.
    onsubmit({
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
      confirmPassword: enteredComfirmPassword,
    });
  };

  return (
    <View>
      <View>
        <Input
          label='이메일주소'
          KeyBoardType='email-address'
          // bind()는 표준 javascript 함수로 , 나중에 실행할 함수를 미리 조정할 수 있게 합니다
          // bind에 제공되는 첫번째 인수는 곧 실행할 함수의 this 키워드로설정됩니다
          // 두번째 인수는 지정한 함수에 전달할 값을 세팅 하면 됩니다.
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          isInvalid={emailIsvalid}
          value={enteredEmail}
        />
        {!isLogin && (
          <Input
            label='이름'
            onUpdateValue={updateInputValueHandler.bind(this, 'name')}
            isInvalid={nameIsvalid}
            value={enteredName}
          />
        )}
        <Input
          label='비밀번호'
          secure
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          isInvalid={passwordIsvalid}
          value={enteredPassword}
        />
        {!isLogin && (
          <Input
            label='비밀번호확인'
            secure
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword',
            )}
            isInvalid={passwordDontMatch}
            value={enteredComfirmPassword}
          />
        )}
        <View style={styles.button}>
          <Button onPress={submitHandler}>
            {isLogin ? '로그인' : '회원 가입'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
  },
});
