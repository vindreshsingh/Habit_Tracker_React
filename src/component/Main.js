import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { Button } from 'antd';
import { addGoal, deleteGoal } from '../actions/goals';
import { connect } from 'react-redux';
import Habit from './Habit';
import { openNotify, layout, tailLayout } from '../helpers';
function Main(props) {
  //input the goal title
  const [title, setTitle] = useState('');

  const handleAddChange = (e) => {
    setTitle(e.target.value);
  };

  //to dispatch action to add goal
  const handleAddGoal = () => {
    props.dispatch(
      addGoal({
        key: Math.round(Math.random() * 100),
        title: title,
        status: ['None', 'None', 'None', 'None', 'None', 'None', 'None'],
        streak: 0,
      })
    );

    setTitle('');
    openNotify(
      'success',
      'Habit Added',
      'You Successfully added your Habit. Now track your habit!!'
    );
  };

  //to dispatch action to delete goal
  const handleDelete = (goal) => {
    console.log('delete', goal);
    props.dispatch(deleteGoal(goal));

    openNotify('error', 'Habit Removed', 'You have Successfully deleted Your Habit!!');
  };

  // render input and add button along with display all cards=goal added
  return (
    <Row justify='space-around' align='middle'>
      <Col span={12}>
        <div className='input-container'>
          <Form
            {...layout}
            name='basic'
            initialValues={{
              remember: true,
            }}
            onFinish={handleAddGoal}
          >
            <Form.Item
              name='goal'
              rules={[
                {
                  required: true,
                  message: 'Please enter your Daily Habit!',
                },
              ]}
            >
              <Input
                onChange={handleAddChange}
                allowClear
                placeholder='Add!!'
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit' size='large'>
                Add Your Habit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Habit
          goals={props.state.goals}
          notify={openNotify}
          handleDelete={handleDelete}
          history={props.history}
        />
      </Col>
    </Row>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Main);
