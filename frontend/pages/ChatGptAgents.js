// components/realtimeDatabase/ChatGptAgents.js
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '../../lib/firebase/initFirebase'; // Adjust the path to where you export your Firebase app instance
import styles from '../../styles/ChatGptAgents.module.css'; // Adjust the path to your CSS module

const ChatGptAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const agentsRef = ref(database, 'Chat-Gpts');

    // Fetch agents from the database
    onValue(agentsRef, (snapshot) => {
      const agentsData = snapshot.val();
      if (agentsData) {
        // Assuming each agent object has a 'name' property
        const agentsWithSymbols = Object.values(agentsData).map((agent) => ({
          ...agent,
          symbol: getSymbolForAgent(agent.name), // Use the getSymbolForAgent function
        }));

        setAgents(agentsWithSymbols);
      }
    });
  }, []);

  // Function to determine the symbol for each agent
  const getSymbolForAgent = (agentName) => {
    // Create a mapping of agent names to symbols
    const symbolMap = {
      'Agent1': 'AAM',
      'Agent2': 'AF',
      'Agent3': 'AGW',
      'Agent4': 'AM',
      'Agent5': 'AQG',
      'Agent6': 'CCK',
      'Agent7': 'CCL',
      'Agent8': 'CCS',
      'Agent9': 'CH',
      'Agent10': 'CLE',
      'Agent11': 'CR',
      'Agent12': 'CR1',
      'Agent13': 'CRH',
      'Agent14': 'DAE',
      'Agent15': 'DW',
      'Agent16': 'FL',
      'Agent17': 'FLA',
      'Agent18': 'FS',
      'Agent19': 'FT',
      'Agent20': 'GS',
      'Agent21': 'GTI',
      'Agent22': 'HRR',
      'Agent23': 'HW',
      'Agent24': 'IA',
      'Agent25': 'IC',
      'Agent26': 'IGM',
      'Agent27': 'IIL',
      'Agent28': 'IP',
      'Agent29': 'IR',
      'Agent30': 'IS',
      'Agent31': 'ISG',
      'Agent32': 'ISP',
      'Agent33': 'LK',
      'Agent34': 'LP',
      'Agent35': 'MDM',
      'Agent36': 'MG',
      'Agent37': 'MLS',
      'Agent38': 'NE',
      'Agent39': 'NSH',
      'Agent40': 'OO',
      'Agent41': 'QBC',
      'Agent42': 'RL',
      'Agent43': 'RSP',
      'Agent44': 'SG',
      'Agent45': 'SH',
      'Agent46': 'SL',
      'Agent47': 'SS',
      'Agent48': 'WDG',
      'Agent49': 'WP',
      'Agent50': 'ZP',
      // Add more mappings as needed
    };
  
    // Check if there is a symbol mapping for the agent name
    if (symbolMap.hasOwnProperty(agentName)) {
      return symbolMap[agentName];
    }
  
    // Return a default symbol if no match is found
    return 'DefaultSymbol';
  };
  

  return (
    <div className={styles.agentList}>
      <h2>Chat GPT Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <div className={styles.agentSymbol}>{agent.symbol}</div>
            <div className={styles.agentName}>{agent.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatGptAgents;
