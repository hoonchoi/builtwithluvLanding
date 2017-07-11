import React from 'react';
import '../styles/team.css';

import {Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

import { team } from '../data/team';

const teamCards = team.map(member => {
  const { avatar, github, linkedin, name, summary, title } = member;
  return (
    <Card className="member-card" style={{margin: '0 auto'}} key={avatar}>
      <CardHeader
        title={name}
        subtitle={title}
        avatar={<Avatar size={60} src={avatar} />}
        className="member-header"
        actAsExpander={true}
        showExpandableButton={true}
        titleStyle={{fontSize:'20px'}}
        subtitleStyle={{fontSize:'16px'}}
      />
      <CardActions>
        <RaisedButton
          href={github}
          target="_blank"
          secondary={true}
          icon={<i className="fa fa-github fa-2x" />}
        />
        <RaisedButton
          href={linkedin}
          target="_blank"
          secondary={true}
          icon={<i className="fa fa-linkedin-square fa-2x" />}
        />
      </CardActions>
      <CardText expandable={true} style={{textAlign: 'left'}}>
        {summary}
      </CardText>
    </Card>
  )
})

const Team = () => (
  <div id="team" className="team">
    <div className="meet-the-team">
      Meet the Team
    </div>
    {teamCards}
  </div>
);

export default Team;
