export class IntegrationWithEditors {
  width = 150;
  height = 150;
  backColor = '#ffffff';
  borderColor = '#333333';
  borderStyle = 'solid';
  float = 'none';

  onToggle(e) {
    let position = e.target.text().toLowerCase();

    if (position === 'center') {
      position = 'none';
    }

    this.float = position;
  }
}
