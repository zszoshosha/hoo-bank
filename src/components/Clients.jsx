import { clients } from "../constants";
import styles from "../style";

// Client logos bar: displays partner logos in a responsive wrapping row
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full gap-4`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[80px] xs:w-[100px] object-contain hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
