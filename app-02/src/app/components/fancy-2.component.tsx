import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';

type FcProps = {
  customProp?: any;
};

const helperString = 'Insert Tree Data';
interface RenderTree {
  id: string;
  label: string;
  children?: readonly RenderTree[];
}
const defaultTreeData: RenderTree[] = [
  {
    id: 'root',
    label: 'Parent',
    children: [
      {
        id: '1',
        label: 'Child - 1',
      },
      {
        id: '2',
        label: 'Child - 2',
        children: [
          {
            id: '2a',
            label: 'Child - 2-A',
          },
        ],
      },
    ],
  },
];

/**
 * another set of sample data
 * 
 [
	{
		id: "application",
		label: "application",
		children: [{ id: "calendar", label: "calendar" }],
	},
	{
		id: "documents",
		label: "documents",
		children: [
			{ id: "oss", label: "oss" },
			{ id: "mui", label: "MUI", children: [{ id: "index_js", label: "index.js" }] },
		],
	},
] 
 */

/**
 *
 * @param props
 * @returns
 */
export const Fancy2: React.FC<FcProps> = (props) => {
  const refTree = React.useRef(null);

  const [treeValue, setTreeValue] = React.useState('[]');
  const [helperText, setHelperText] = React.useState(helperString);
  const [errorInEntry, setErrorInEntry] = React.useState(false);

  const [treeNodes, setTreeNodes] = React.useState<RenderTree[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTreeValue(event.target.value);
    setErrorInEntry(false);
    setHelperText(helperString);
  };

  const handleAction = () => {
    setErrorInEntry(false);
    setHelperText(helperString);
    try {
      // console.log('111', treeValue);
      let getTreeNodes = Function('return (' + treeValue + ')');
      // console.log('222');
      let nodes = getTreeNodes();
      // console.log(nodes);
      if (!Array.isArray(nodes)) {
        nodes = defaultTreeData;
        return;
      }

      // console.log('333');
      setTreeNodes(nodes);
    } catch (error) {
      console.error('error', error);
      setErrorInEntry(true);
      setHelperText('Incorect Entry');
    }
  };

  const renderTreeData = () => {
    // console.log('nodes from class', treeNodes);

    let nodes: RenderTree[] = treeNodes;

    console.log({ nodes });
    let treeData: RenderTree[] = [];

    if (nodes && nodes.length) {
      treeData = nodes;
    } else {
      treeData = defaultTreeData;
    }
    console.log({ treeData });

    return treeData.map((node) => renderTree(node));
  };

  const renderTree = (node: RenderTree) => (
    <TreeItem key={'tree-node-key-' + node.id} nodeId={node.id} label={node.label}>
      {Array.isArray(node.children) ? node.children.map((childNode) => renderTree(childNode)) : null}
    </TreeItem>
  );

  const handleActionOnTree = () => {
    console.log('tree selected data -', refTree.current);

    // alert();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>WebPerformer Trial Component 1</h1>
      </div>

      <Box sx={{ m: 1 }}>
        <TextField
          multiline
          rows={6}
          fullWidth
          label="Name"
          value={treeValue}
          onChange={handleChange}
          error={errorInEntry}
          helperText={helperText}
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <Button variant="contained" onClick={handleAction}>
          Load Tree
        </Button>
      </Box>
      <Box sx={{ m: 1 }}>
        <TreeView
          ref={refTree}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          {renderTreeData()}
        </TreeView>
      </Box>
      <Box sx={{ m: 1 }}>
        <Button variant="contained" onClick={handleActionOnTree}>
          Show Tree Node selected
        </Button>
      </Box>
    </div>
  );
};
