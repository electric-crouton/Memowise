import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
};

const CourseTabs = () => (
  <Tabs>
    <Tab label="Students" >
      <div>
        <h2 style={styles.headline}>Students</h2>
        <p>
          This is an example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Decks" >
      <div>
        <h2 style={styles.headline}>Decks</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default CourseTabs;