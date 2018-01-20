import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';



export default class DrawerUndockedExample extends React.Component {


  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.props.handleToggle}
        />
        <Drawer
          docked={false}
          width={230}
          open={this.props.isOpen}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.props.handleToggle} primaryText="" leftIcon={<RemoveRedEye />} />
          <i onClick={this.handleClose} className="fa fa-bars fa-2x"></i>
          <div>
            <Paper style={style.paper}>
              <Menu>
                <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
                <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
                <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
                <Divider />
                <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
                <MenuItem primaryText="Download" leftIcon={<Download />} />
                <Divider />
                <MenuItem primaryText="Remove" leftIcon={<Delete />} />
              </Menu>
            </Paper>
          </div>
        </Drawer>
      </div>
    );
  }
}
