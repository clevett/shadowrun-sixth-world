import logo from './logo.svg';
import './App.css';
import { EuiHeader, EuiHeaderSection, EuiHeaderSectionItem, EuiIcon } from '@elastic/eui';

function App() {
  return (
    <div className="App">
      <EuiHeader>
        <EuiHeaderSection grow={false}>
          <EuiHeaderSectionItem border="right">
            <EuiIcon title="current logged in user" type="user" />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
{/* 
        <!-- You can render breadcrumbs here using EuiHeaderBreadcrumbs --> */}

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            {/* <!-- HeaderSectionItem content --> */}
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    </div>
  );
}

export default App;
