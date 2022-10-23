// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`components/ButtonGroup Test Default Button Group Snapshot Test Button Group 1`] = `
.emotion-0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  min-width: auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.emotion-0 .Ursa-ButtonItem:not(:first-of-type) {
  margin-left: 0.625rem;
}

.emotion-1 {
  width: auto;
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgba(239, 68, 68, 1);
  background-color: rgba(239, 68, 68, 1);
  color: white;
  transition-property: color,background-color,box-shadow,border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.emotion-1:hover {
  color: "auto";
  background-color: rgba(220, 38, 38, 1);
  border-color: rgba(220, 38, 38, 1);
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);
  white-space: nowrap;
}

.emotion-1 .Ursa-ButtonIconLabel {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content:center align-items: center;
  gap: 0.5em;
}

.emotion-1 .Ursa-Icon {
  margin: auto;
}

.emotion-2 {
  width: auto;
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgba(203, 213, 225, 1);
  background-color: white;
  color: rgba(109, 113, 117, 1);
  transition-property: color,background-color,box-shadow,border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.emotion-2:hover {
  color: "auto";
  background-color: #F8F8F8;
  border-color: auto;
  cursor: pointer;
  box-shadow: none;
  white-space: nowrap;
}

.emotion-2 .Ursa-ButtonIconLabel {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content:center align-items: center;
  gap: 0.5em;
}

.emotion-2 .Ursa-Icon {
  margin: auto;
}

<div
  className=Ursa-ButtonGroup emotion-0
  role=group
>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-1
        role=button
        type=button
      >
        Cancel
      </button>
    </div>
  </div>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-2
        role=button
        type=button
      >
        Save
      </button>
    </div>
  </div>
</div>
`;

exports[`components/ButtonGroup Test Outline Buttons in a Segmented Group Snapshot Test Outline Buttons in a Segmented Group 1`] = `
.emotion-0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  min-width: auto;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.emotion-0 .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)>.Ursa-ButtonContainer>button {
  border-radius: unset;
  margin-right: -1px;
}

.emotion-0 .Ursa-ButtonItem:last-of-type>.Ursa-ButtonContainer>button {
  margin-left: 0;
  border-top-left-radius: unset;
  border-bottom-left-radius: unset;
}

.emotion-0 .Ursa-ButtonItem:first-of-type>.Ursa-ButtonContainer>button {
  margin-right: -1px;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
}

.emotion-1 {
  width: auto;
  min-width: 85px;
  padding-top: 0.875em;
  padding-bottom: 0.875em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgba(20, 184, 166, 1);
  background-color: transparent;
  color: rgba(20, 184, 166, 1);
  transition-property: color,background-color,box-shadow,border-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.emotion-1:hover {
  color: "auto";
  background-color: transparent;
  border-color: rgba(13, 148, 136, 1);
  cursor: pointer;
  box-shadow: none;
  white-space: nowrap;
}

.emotion-1 .Ursa-ButtonIconLabel {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content:center align-items: center;
  gap: 0.5em;
}

.emotion-1 .Ursa-Icon {
  margin: auto;
}

<div
  className=Ursa-ButtonGroup emotion-0
  role=group
>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-1
        role=button
        type=button
      >
        Bold
      </button>
    </div>
  </div>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-1
        role=button
        type=button
      >
        Italic
      </button>
    </div>
  </div>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-1
        role=button
        type=button
      >
        Underline
      </button>
    </div>
  </div>
  <div
    className=Ursa-ButtonItem
  >
    <div
      className=Ursa-ButtonContainer
    >
      <button
        className=Ursa-Button emotion-1
        role=button
        type=button
      >
        Strikethrough
      </button>
    </div>
  </div>
</div>
`;
