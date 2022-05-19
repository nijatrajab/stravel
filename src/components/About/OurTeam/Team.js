import TeamHead from "./TeamHead";
import TeamMembers from "./TeamMembers";

const Team = ({children, ourTeam}) => {
  return (
    <>
      <TeamHead ourTeam={ourTeam}/>
      <TeamMembers />
    </>
  );
};

export default Team;
