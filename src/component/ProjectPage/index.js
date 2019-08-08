import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeSearch, fetchProject } from '../../redux/actionCreators';
import styles from '../../styles/project.module.css';
import Header from './Project/Header/Header';
import List from './Project/List/List';


class ProjectComponent extends PureComponent {
  onChange = (event) => {
    const { changeSearch, fetchProject } = this.props;
    const valInputSearch = event.target.value;

    changeSearch(valInputSearch);
    if (valInputSearch.length >= 3) {
      fetchProject(valInputSearch);
    }
  }

  render() {
    return (
      <div className={styles.body}>
        <Header store={this.props.items} onChange={this.onChange} />
        <List store={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state
});

export default connect(mapStateToProps, { fetchProject, changeSearch })(ProjectComponent);
