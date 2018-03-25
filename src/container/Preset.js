import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import Button from '../components/Button';

const mapStatetoProps = () => ({
  children: 'OW heroes preset',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(sectionsActions.loadPreset(OWHeroes)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Button);

const OWHeroes = [
  {
    label: 'Doomfist',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Genji',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'McCree',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Pharah',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Reaper',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Soldier 76',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Sombra',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Tracer',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Bastion',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Hanzo',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Junkrat',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Mei',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Torbjörn',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Widowmaker',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'D.Va',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Orisa',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Reinhardt',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Roadhog',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Winston',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Zarya',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Ana',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Brigitte',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Lúcio',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Mercy',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Moira',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Symmetra',
    color: 'rgb(245, 145, 41)',
  },
  {
    label: 'Zenyatta',
    color: 'rgb(245, 145, 41)',
  },
];
