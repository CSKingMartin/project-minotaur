import { Editor, Specimen } from '@hanga'

const Box = () => <div>This is a box component</div>

export default () =>
  <StatefulContext.Provider>
    <h1>Specimen Test</h1>

    <p>Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat.</p>

    <h2>Static Specimen</h2>

    <Specimen>
      <p><button className="btn">This is a button</button></p>
      <Box />
    </Specimen>

    <h2>Use Editors to make Specimen Editable</h2>

    <Specimen
      Editors={({ quickEditors }) => (
        <React.Fragment>
          <Editor.Text
            name="buttonText"
            defaultValue="This button text is editable"
          />

          <Editor.Select
            name="color"
            label="Color"
            defaultValue={'blue'}
            options={['red', 'blue', 'green']}
          />

          <Editor.Toggle
            name="isDisabled"
            defaultValue={false}
          />

          {quickEditors}
        </React.Fragment>
      )}
      quickEditors={{
        loremIpsum: 'Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat.'
      }}
    >
      {
        ({ buttonText, isDisabled, color, loremIpsum }) =>
          <React.Fragment>
            <button disabled={isDisabled} style={{ color }} className="btn">{buttonText}</button>

            {
              [...Array(4)].map((_, i) => (
                <p key={i}>{loremIpsum}</p>
              ))
            }
          </React.Fragment>
      }
    </Specimen>

    <h2>Hide the code viewer and resizer</h2>

    <p>Use <code>hideCode</code> and <code>hideResizer</code> props to hide the respective Specimen sections.</p>

    <Specimen hideCode hideResizer>
      <p>Non aliqua qui nisi laboris id commodo pariatur culpa. Pariatur voluptate magna officia sint irure officia enim ullamco id Lorem. Quis consectetur nulla velit reprehenderit ipsum ad minim mollit eu adipisicing ut culpa. Proident sint ullamco reprehenderit velit culpa laborum ea cupidatat et incididunt qui anim. Cillum adipisicing voluptate officia dolore est tempor mollit. Sint exercitation duis reprehenderit elit qui proident magna. Labore ad eiusmod consequat reprehenderit et ut laboris. Cupidatat enim veniam exercitation irure enim proident proident proident ullamco. Laboris eiusmod excepteur qui exercitation. Aliquip reprehenderit esse est ullamco dolore elit fugiat exercitation pariatur.</p>
    </Specimen>
  </StatefulContext.Provider>
