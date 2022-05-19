import TeamMember from "./TeamMember";
import classes from "./TeamMembers.module.css";
import { teamList } from "../../../store/constant-images";

const TeamMembers = () => {
  return (
    <div className={classes["team-list"]}>
      {teamList.map((teamMember, idx) => {
        return (
          <TeamMember
            key={`teamMember-${idx}-${Math.random()}`}
            index={idx}
            name={teamMember.name}
            desc={teamMember.desc}
            position={teamMember.position}
            image={teamMember.image}
            social={teamMember.social}
          />
        );
      })}
    </div>
  );
};

export default TeamMembers;
